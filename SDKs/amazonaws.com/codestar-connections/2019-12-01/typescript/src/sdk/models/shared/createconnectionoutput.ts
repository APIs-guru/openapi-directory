import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";



export class CreateConnectionOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ConnectionArn" })
  connectionArn: string;

  @SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag })
  tags?: Tag[];
}
