import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Filter } from "./filter";


// DescribeReplicationTaskIndividualAssessmentsMessage
/** 
 * <p/>
**/
export class DescribeReplicationTaskIndividualAssessmentsMessage extends SpeakeasyBase {
  @Metadata({ data: "json, name=Filters", elemType: shared.Filter })
  filters?: Filter[];

  @Metadata({ data: "json, name=Marker" })
  marker?: string;

  @Metadata({ data: "json, name=MaxRecords" })
  maxRecords?: number;
}
