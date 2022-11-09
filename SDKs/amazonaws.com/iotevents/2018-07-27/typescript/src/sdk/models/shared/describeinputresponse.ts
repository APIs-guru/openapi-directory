import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Input } from "./input";


export class DescribeInputResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=input" })
  input?: Input;
}
