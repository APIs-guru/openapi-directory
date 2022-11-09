import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum ListAssociatedFleetsXAmzTargetEnum {
    PhotonAdminProxyServiceListAssociatedFleets = "PhotonAdminProxyService.ListAssociatedFleets"
}


export class ListAssociatedFleetsHeaders extends SpeakeasyBase {
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
  xAmzTarget: ListAssociatedFleetsXAmzTargetEnum;
}


export class ListAssociatedFleetsRequest extends SpeakeasyBase {
  @Metadata()
  headers: ListAssociatedFleetsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ListAssociatedFleetsRequest;
}


export class ListAssociatedFleetsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listAssociatedFleetsResult?: shared.ListAssociatedFleetsResult;

  @Metadata()
  statusCode: number;
}
