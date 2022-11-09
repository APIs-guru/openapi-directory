import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetSetInstanceProtectionActionEnum {
    SetInstanceProtection = "SetInstanceProtection"
}

export enum GetSetInstanceProtectionVersionEnum {
    TwoThousandAndEleven0101 = "2011-01-01"
}


export class GetSetInstanceProtectionQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetSetInstanceProtectionActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=AutoScalingGroupName" })
  autoScalingGroupName: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=InstanceIds" })
  instanceIds: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=ProtectedFromScaleIn" })
  protectedFromScaleIn: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetSetInstanceProtectionVersionEnum;
}


export class GetSetInstanceProtectionHeaders extends SpeakeasyBase {
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


export class GetSetInstanceProtectionRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetSetInstanceProtectionQueryParams;

  @Metadata()
  headers: GetSetInstanceProtectionHeaders;
}


export class GetSetInstanceProtectionResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
