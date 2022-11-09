import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetNamedQueryXAmzTargetEnum {
    AmazonAthenaGetNamedQuery = "AmazonAthena.GetNamedQuery"
}


export class GetNamedQueryHeaders extends SpeakeasyBase {
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
  xAmzTarget: GetNamedQueryXAmzTargetEnum;
}


export class GetNamedQueryRequest extends SpeakeasyBase {
  @Metadata()
  headers: GetNamedQueryHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.GetNamedQueryInput;
}


export class GetNamedQueryResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getNamedQueryOutput?: shared.GetNamedQueryOutput;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  statusCode: number;
}
