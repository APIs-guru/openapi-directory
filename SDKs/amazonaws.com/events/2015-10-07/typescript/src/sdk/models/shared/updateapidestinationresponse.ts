import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ApiDestinationStateEnum } from "./apidestinationstateenum";



export class UpdateApiDestinationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ApiDestinationArn" })
  apiDestinationArn?: string;

  @SpeakeasyMetadata({ data: "json, name=ApiDestinationState" })
  apiDestinationState?: ApiDestinationStateEnum;

  @SpeakeasyMetadata({ data: "json, name=CreationTime" })
  creationTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=LastModifiedTime" })
  lastModifiedTime?: Date;
}
