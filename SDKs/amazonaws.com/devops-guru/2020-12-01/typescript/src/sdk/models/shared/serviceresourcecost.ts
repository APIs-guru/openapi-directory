import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CostEstimationServiceResourceStateEnum } from "./costestimationserviceresourcestateenum";



// ServiceResourceCost
/** 
 * An object that contains information about the estimated monthly cost to analyze an AWS resource. For more information, see <a href="https://docs.aws.amazon.com/devops-guru/latest/userguide/cost-estimate.html">Estimate your Amazon DevOps Guru costs</a> and <a href="http://aws.amazon.com/devops-guru/pricing/">Amazon DevOps Guru pricing</a>.
**/
export class ServiceResourceCost extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Cost" })
  cost?: number;

  @SpeakeasyMetadata({ data: "json, name=Count" })
  count?: number;

  @SpeakeasyMetadata({ data: "json, name=State" })
  state?: CostEstimationServiceResourceStateEnum;

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type?: string;

  @SpeakeasyMetadata({ data: "json, name=UnitCost" })
  unitCost?: number;
}
