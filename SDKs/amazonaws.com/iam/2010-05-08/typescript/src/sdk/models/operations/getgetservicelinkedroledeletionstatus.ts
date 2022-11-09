import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetGetServiceLinkedRoleDeletionStatusActionEnum {
    GetServiceLinkedRoleDeletionStatus = "GetServiceLinkedRoleDeletionStatus"
}

export enum GetGetServiceLinkedRoleDeletionStatusVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}


export class GetGetServiceLinkedRoleDeletionStatusQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetGetServiceLinkedRoleDeletionStatusActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DeletionTaskId" })
  deletionTaskId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetGetServiceLinkedRoleDeletionStatusVersionEnum;
}


export class GetGetServiceLinkedRoleDeletionStatusHeaders extends SpeakeasyBase {
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


export class GetGetServiceLinkedRoleDeletionStatusRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetGetServiceLinkedRoleDeletionStatusQueryParams;

  @Metadata()
  headers: GetGetServiceLinkedRoleDeletionStatusHeaders;
}


export class GetGetServiceLinkedRoleDeletionStatusResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
