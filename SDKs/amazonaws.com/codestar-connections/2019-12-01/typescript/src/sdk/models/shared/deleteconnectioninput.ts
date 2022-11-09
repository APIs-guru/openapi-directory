import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteConnectionInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=ConnectionArn" })
  connectionArn: string;
}
