import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ApiDestinationStateEnum } from "./apidestinationstateenum";


export class CreateApiDestinationResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ApiDestinationArn" })
  apiDestinationArn?: string;

  @Metadata({ data: "json, name=ApiDestinationState" })
  apiDestinationState?: ApiDestinationStateEnum;

  @Metadata({ data: "json, name=CreationTime" })
  creationTime?: Date;

  @Metadata({ data: "json, name=LastModifiedTime" })
  lastModifiedTime?: Date;
}
