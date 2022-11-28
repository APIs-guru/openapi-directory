import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Environment } from "./environment";



export class DescribeEnvironmentsResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=environments", elemType: Environment })
  environments?: Environment[];
}
