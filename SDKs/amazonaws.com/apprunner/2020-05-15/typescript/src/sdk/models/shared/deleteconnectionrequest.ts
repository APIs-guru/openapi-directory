import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteConnectionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ConnectionArn" })
  connectionArn: string;
}
