import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AggregateComplianceByConformancePack } from "./aggregatecompliancebyconformancepack";


export class DescribeAggregateComplianceByConformancePacksResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=AggregateComplianceByConformancePacks", elemType: shared.AggregateComplianceByConformancePack })
  aggregateComplianceByConformancePacks?: AggregateComplianceByConformancePack[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
