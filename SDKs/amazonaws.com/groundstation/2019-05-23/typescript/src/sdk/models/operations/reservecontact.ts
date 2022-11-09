import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ReserveContactHeaders extends SpeakeasyBase {
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


export class ReserveContactRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=endTime" })
  endTime: Date;

  @Metadata({ data: "json, name=groundStation" })
  groundStation: string;

  @Metadata({ data: "json, name=missionProfileArn" })
  missionProfileArn: string;

  @Metadata({ data: "json, name=satelliteArn" })
  satelliteArn: string;

  @Metadata({ data: "json, name=startTime" })
  startTime: Date;

  @Metadata({ data: "json, name=tags" })
  tags?: Map<string, string>;
}


export class ReserveContactRequest extends SpeakeasyBase {
  @Metadata()
  headers: ReserveContactHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: ReserveContactRequestBody;
}


export class ReserveContactResponse extends SpeakeasyBase {
  @Metadata()
  contactIdResponse?: shared.ContactIdResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  dependencyException?: any;

  @Metadata()
  invalidParameterException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;
}
