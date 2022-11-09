import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Repository } from "./repository";


export class DescribeRepositoriesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=repositories", elemType: shared.Repository })
  repositories?: Repository[];
}
