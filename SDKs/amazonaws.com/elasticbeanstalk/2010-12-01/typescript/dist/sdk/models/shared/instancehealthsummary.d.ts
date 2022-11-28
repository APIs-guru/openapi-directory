import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents summary information about the health of an instance. For more information, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/health-enhanced-status.html">Health Colors and Statuses</a>.
**/
export declare class InstanceHealthSummary extends SpeakeasyBase {
    degraded?: number;
    info?: number;
    noData?: number;
    ok?: number;
    pending?: number;
    severe?: number;
    unknown?: number;
    warning?: number;
}
