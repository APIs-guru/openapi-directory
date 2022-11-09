import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteConnectionRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ConnectionArn" })
  connectionArn: string;
}
