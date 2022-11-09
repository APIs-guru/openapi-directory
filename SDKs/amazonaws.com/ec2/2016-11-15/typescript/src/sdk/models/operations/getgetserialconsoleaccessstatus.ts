import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetGetSerialConsoleAccessStatusActionEnum {
    GetSerialConsoleAccessStatus = "GetSerialConsoleAccessStatus"
}

export enum GetGetSerialConsoleAccessStatusVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class GetGetSerialConsoleAccessStatusQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetGetSerialConsoleAccessStatusActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DryRun" })
  dryRun?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetGetSerialConsoleAccessStatusVersionEnum;
}


export class GetGetSerialConsoleAccessStatusHeaders extends SpeakeasyBase {
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


export class GetGetSerialConsoleAccessStatusRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetGetSerialConsoleAccessStatusQueryParams;

  @Metadata()
  headers: GetGetSerialConsoleAccessStatusHeaders;
}


export class GetGetSerialConsoleAccessStatusResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
