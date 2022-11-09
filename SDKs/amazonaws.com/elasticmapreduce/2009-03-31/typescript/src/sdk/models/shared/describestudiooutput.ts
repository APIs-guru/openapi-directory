import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Studio } from "./studio";


export class DescribeStudioOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=Studio" })
  studio?: Studio;
}
