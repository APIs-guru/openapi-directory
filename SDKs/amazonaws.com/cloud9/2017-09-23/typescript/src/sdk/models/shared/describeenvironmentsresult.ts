import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Environment } from "./environment";


export class DescribeEnvironmentsResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=environments", elemType: shared.Environment })
  environments?: Environment[];
}
