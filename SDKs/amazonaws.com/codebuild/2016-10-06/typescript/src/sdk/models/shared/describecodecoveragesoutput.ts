import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CodeCoverage } from "./codecoverage";



export class DescribeCodeCoveragesOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=codeCoverages", elemType: CodeCoverage })
  codeCoverages?: CodeCoverage[];

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
