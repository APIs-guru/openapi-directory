import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Input } from "./input";



export class DescribeInputResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=input" })
  input?: Input;
}
