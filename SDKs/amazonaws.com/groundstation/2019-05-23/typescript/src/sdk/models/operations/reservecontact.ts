import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ReserveContactHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;
}


export class ReserveContactRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=endTime" })
  endTime: Date;

  @SpeakeasyMetadata({ data: "json, name=groundStation" })
  groundStation: string;

  @SpeakeasyMetadata({ data: "json, name=missionProfileArn" })
  missionProfileArn: string;

  @SpeakeasyMetadata({ data: "json, name=satelliteArn" })
  satelliteArn: string;

  @SpeakeasyMetadata({ data: "json, name=startTime" })
  startTime: Date;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: Map<string, string>;
}


export class ReserveContactRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: ReserveContactHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: ReserveContactRequestBody;
}


export class ReserveContactResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contactIdResponse?: shared.ContactIdResponse;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  dependencyException?: any;

  @SpeakeasyMetadata()
  invalidParameterException?: any;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
