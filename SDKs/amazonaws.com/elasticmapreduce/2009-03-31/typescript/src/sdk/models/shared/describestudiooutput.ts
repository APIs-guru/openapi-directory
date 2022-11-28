import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Studio } from "./studio";



export class DescribeStudioOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Studio" })
  studio?: Studio;
}
