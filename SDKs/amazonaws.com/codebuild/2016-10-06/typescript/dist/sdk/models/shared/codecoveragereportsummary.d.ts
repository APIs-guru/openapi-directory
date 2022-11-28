import { SpeakeasyBase } from "../../../internal/utils";
/**
 * <p>Contains a summary of a code coverage report.</p> <p>Line coverage measures how many statements your tests cover. A statement is a single instruction, not including comments, conditionals, etc.</p> <p>Branch coverage determines if your tests cover every possible branch of a control structure, such as an <code>if</code> or <code>case</code> statement.</p>
**/
export declare class CodeCoverageReportSummary extends SpeakeasyBase {
    branchCoveragePercentage?: number;
    branchesCovered?: number;
    branchesMissed?: number;
    lineCoveragePercentage?: number;
    linesCovered?: number;
    linesMissed?: number;
}
