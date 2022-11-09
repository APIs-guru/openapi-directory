import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetConfirmProductInstanceActionEnum {
    ConfirmProductInstance = "ConfirmProductInstance"
}

export enum GetConfirmProductInstanceVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class GetConfirmProductInstanceQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetConfirmProductInstanceActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DryRun" })
  dryRun?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=InstanceId" })
  instanceId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ProductCode" })
  productCode: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetConfirmProductInstanceVersionEnum;
}


export class GetConfirmProductInstanceHeaders extends SpeakeasyBase {
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


export class GetConfirmProductInstanceRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetConfirmProductInstanceQueryParams;

  @Metadata()
  headers: GetConfirmProductInstanceHeaders;
}


export class GetConfirmProductInstanceResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
