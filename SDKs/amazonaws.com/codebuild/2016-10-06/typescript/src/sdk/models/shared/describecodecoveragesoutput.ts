import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CodeCoverage } from "./codecoverage";


export class DescribeCodeCoveragesOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=codeCoverages", elemType: shared.CodeCoverage })
  codeCoverages?: CodeCoverage[];

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
