import { SpeakeasyBase } from "../../../internal/utils";
import { CostEstimationServiceResourceStateEnum } from "./costestimationserviceresourcestateenum";
/**
 * An object that contains information about the estimated monthly cost to analyze an AWS resource. For more information, see <a href="https://docs.aws.amazon.com/devops-guru/latest/userguide/cost-estimate.html">Estimate your Amazon DevOps Guru costs</a> and <a href="http://aws.amazon.com/devops-guru/pricing/">Amazon DevOps Guru pricing</a>.
**/
export declare class ServiceResourceCost extends SpeakeasyBase {
    cost?: number;
    count?: number;
    state?: CostEstimationServiceResourceStateEnum;
    type?: string;
    unitCost?: number;
}
