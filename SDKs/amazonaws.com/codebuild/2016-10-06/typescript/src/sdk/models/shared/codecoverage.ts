import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CodeCoverage
/** 
 * <p>Contains code coverage report information.</p> <p>Line coverage measures how many statements your tests cover. A statement is a single instruction, not including comments, conditionals, etc.</p> <p>Branch coverage determines if your tests cover every possible branch of a control structure, such as an <code>if</code> or <code>case</code> statement.</p>
**/
export class CodeCoverage extends SpeakeasyBase {
  @Metadata({ data: "json, name=branchCoveragePercentage" })
  branchCoveragePercentage?: number;

  @Metadata({ data: "json, name=branchesCovered" })
  branchesCovered?: number;

  @Metadata({ data: "json, name=branchesMissed" })
  branchesMissed?: number;

  @Metadata({ data: "json, name=expired" })
  expired?: Date;

  @Metadata({ data: "json, name=filePath" })
  filePath?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=lineCoveragePercentage" })
  lineCoveragePercentage?: number;

  @Metadata({ data: "json, name=linesCovered" })
  linesCovered?: number;

  @Metadata({ data: "json, name=linesMissed" })
  linesMissed?: number;

  @Metadata({ data: "json, name=reportARN" })
  reportArn?: string;
}
