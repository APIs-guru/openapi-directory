import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ScalableDimensionEnum } from "./scalabledimensionenum";
import { ServiceNamespaceEnum } from "./servicenamespaceenum";



export class DescribeScalingPoliciesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=PolicyNames" })
  policyNames?: string[];

  @SpeakeasyMetadata({ data: "json, name=ResourceId" })
  resourceId?: string;

  @SpeakeasyMetadata({ data: "json, name=ScalableDimension" })
  scalableDimension?: ScalableDimensionEnum;

  @SpeakeasyMetadata({ data: "json, name=ServiceNamespace" })
  serviceNamespace: ServiceNamespaceEnum;
}
