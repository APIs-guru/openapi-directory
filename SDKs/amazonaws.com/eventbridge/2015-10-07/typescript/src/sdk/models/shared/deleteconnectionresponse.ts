import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ConnectionStateEnum } from "./connectionstateenum";


export class DeleteConnectionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ConnectionArn" })
  connectionArn?: string;

  @Metadata({ data: "json, name=ConnectionState" })
  connectionState?: ConnectionStateEnum;

  @Metadata({ data: "json, name=CreationTime" })
  creationTime?: Date;

  @Metadata({ data: "json, name=LastAuthorizedTime" })
  lastAuthorizedTime?: Date;

  @Metadata({ data: "json, name=LastModifiedTime" })
  lastModifiedTime?: Date;
}
