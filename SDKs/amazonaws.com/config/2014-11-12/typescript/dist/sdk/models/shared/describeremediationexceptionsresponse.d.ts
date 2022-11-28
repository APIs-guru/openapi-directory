import { SpeakeasyBase } from "../../../internal/utils";
import { RemediationException } from "./remediationexception";
export declare class DescribeRemediationExceptionsResponse extends SpeakeasyBase {
    nextToken?: string;
    remediationExceptions?: RemediationException[];
}
