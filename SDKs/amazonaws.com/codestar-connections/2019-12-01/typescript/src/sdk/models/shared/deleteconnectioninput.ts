import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteConnectionInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ConnectionArn" })
  connectionArn: string;
}
