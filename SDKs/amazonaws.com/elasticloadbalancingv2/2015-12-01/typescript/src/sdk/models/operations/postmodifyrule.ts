import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PostModifyRuleActionEnum {
    ModifyRule = "ModifyRule"
}

export enum PostModifyRuleVersionEnum {
    TwoThousandAndFifteen1201 = "2015-12-01"
}


export class PostModifyRuleQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostModifyRuleActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostModifyRuleVersionEnum;
}


export class PostModifyRuleHeaders extends SpeakeasyBase {
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


export class PostModifyRuleRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PostModifyRuleQueryParams;

  @Metadata()
  headers: PostModifyRuleHeaders;

  @Metadata({ data: "request, media_type=text/xml" })
  request?: Uint8Array;
}


export class PostModifyRuleResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
