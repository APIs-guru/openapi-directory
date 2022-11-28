import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AggregateComplianceByConformancePack } from "./aggregatecompliancebyconformancepack";



export class DescribeAggregateComplianceByConformancePacksResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AggregateComplianceByConformancePacks", elemType: AggregateComplianceByConformancePack })
  aggregateComplianceByConformancePacks?: AggregateComplianceByConformancePack[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
