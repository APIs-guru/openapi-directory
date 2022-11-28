import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetConnectionInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ConnectionArn" })
  connectionArn: string;
}
