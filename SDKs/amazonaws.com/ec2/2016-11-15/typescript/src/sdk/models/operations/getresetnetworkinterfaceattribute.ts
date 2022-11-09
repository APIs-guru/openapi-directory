import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetResetNetworkInterfaceAttributeActionEnum {
    ResetNetworkInterfaceAttribute = "ResetNetworkInterfaceAttribute"
}

export enum GetResetNetworkInterfaceAttributeVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class GetResetNetworkInterfaceAttributeQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetResetNetworkInterfaceAttributeActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DryRun" })
  dryRun?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=NetworkInterfaceId" })
  networkInterfaceId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=SourceDestCheck" })
  sourceDestCheck?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetResetNetworkInterfaceAttributeVersionEnum;
}


export class GetResetNetworkInterfaceAttributeHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;
}


export class GetResetNetworkInterfaceAttributeRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetResetNetworkInterfaceAttributeQueryParams;

  @Metadata()
  headers: GetResetNetworkInterfaceAttributeHeaders;
}


export class GetResetNetworkInterfaceAttributeResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
