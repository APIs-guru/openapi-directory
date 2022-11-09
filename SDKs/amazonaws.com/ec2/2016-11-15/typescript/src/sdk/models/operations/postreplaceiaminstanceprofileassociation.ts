import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PostReplaceIamInstanceProfileAssociationActionEnum {
    ReplaceIamInstanceProfileAssociation = "ReplaceIamInstanceProfileAssociation"
}

export enum PostReplaceIamInstanceProfileAssociationVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class PostReplaceIamInstanceProfileAssociationQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostReplaceIamInstanceProfileAssociationActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostReplaceIamInstanceProfileAssociationVersionEnum;
}


export class PostReplaceIamInstanceProfileAssociationHeaders extends SpeakeasyBase {
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


export class PostReplaceIamInstanceProfileAssociationRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PostReplaceIamInstanceProfileAssociationQueryParams;

  @Metadata()
  headers: PostReplaceIamInstanceProfileAssociationHeaders;

  @Metadata({ data: "request, media_type=text/xml" })
  request?: Uint8Array;
}


export class PostReplaceIamInstanceProfileAssociationResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
