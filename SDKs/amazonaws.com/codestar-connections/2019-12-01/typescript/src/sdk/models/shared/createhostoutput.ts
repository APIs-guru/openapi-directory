import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";



export class CreateHostOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=HostArn" })
  hostArn?: string;

  @SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag })
  tags?: Tag[];
}
