import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CodeCoverage
/** 
 * <p>Contains code coverage report information.</p> <p>Line coverage measures how many statements your tests cover. A statement is a single instruction, not including comments, conditionals, etc.</p> <p>Branch coverage determines if your tests cover every possible branch of a control structure, such as an <code>if</code> or <code>case</code> statement.</p>
**/
export class CodeCoverage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=branchCoveragePercentage" })
  branchCoveragePercentage?: number;

  @SpeakeasyMetadata({ data: "json, name=branchesCovered" })
  branchesCovered?: number;

  @SpeakeasyMetadata({ data: "json, name=branchesMissed" })
  branchesMissed?: number;

  @SpeakeasyMetadata({ data: "json, name=expired" })
  expired?: Date;

  @SpeakeasyMetadata({ data: "json, name=filePath" })
  filePath?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=lineCoveragePercentage" })
  lineCoveragePercentage?: number;

  @SpeakeasyMetadata({ data: "json, name=linesCovered" })
  linesCovered?: number;

  @SpeakeasyMetadata({ data: "json, name=linesMissed" })
  linesMissed?: number;

  @SpeakeasyMetadata({ data: "json, name=reportARN" })
  reportArn?: string;
}
