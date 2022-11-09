import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum ListCuratedEnvironmentImagesXAmzTargetEnum {
    CodeBuild20161006ListCuratedEnvironmentImages = "CodeBuild_20161006.ListCuratedEnvironmentImages"
}


export class ListCuratedEnvironmentImagesHeaders extends SpeakeasyBase {
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
  xAmzTarget: ListCuratedEnvironmentImagesXAmzTargetEnum;
}


export class ListCuratedEnvironmentImagesRequest extends SpeakeasyBase {
  @Metadata()
  headers: ListCuratedEnvironmentImagesHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: Map<string, any>;
}


export class ListCuratedEnvironmentImagesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listCuratedEnvironmentImagesOutput?: shared.ListCuratedEnvironmentImagesOutput;

  @Metadata()
  statusCode: number;
}
