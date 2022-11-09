import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListActionTypesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=nextToken" })
  nextToken?: string;
}

export enum ListActionTypesXAmzTargetEnum {
    CodePipeline20150709ListActionTypes = "CodePipeline_20150709.ListActionTypes"
}


export class ListActionTypesHeaders extends SpeakeasyBase {
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

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" })
  xAmzTarget: ListActionTypesXAmzTargetEnum;
}


export class ListActionTypesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListActionTypesQueryParams;

  @Metadata()
  headers: ListActionTypesHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ListActionTypesInput;
}


export class ListActionTypesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  invalidNextTokenException?: any;

  @Metadata()
  listActionTypesOutput?: shared.ListActionTypesOutput;

  @Metadata()
  statusCode: number;

  @Metadata()
  validationException?: any;
}
