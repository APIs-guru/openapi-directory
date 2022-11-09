import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { BackfillErrorCodeEnum } from "./backfillerrorcodeenum";
import { PartitionValueList } from "./partitionvaluelist";


// BackfillError
/** 
 * <p>A list of errors that can occur when registering partition indexes for an existing table.</p> <p>These errors give the details about why an index registration failed and provide a limited number of partitions in the response, so that you can fix the partitions at fault and try registering the index again. The most common set of errors that can occur are categorized as follows:</p> <ul> <li> <p>EncryptedPartitionError: The partitions are encrypted.</p> </li> <li> <p>InvalidPartitionTypeDataError: The partition value doesn't match the data type for that partition column.</p> </li> <li> <p>MissingPartitionValueError: The partitions are encrypted.</p> </li> <li> <p>UnsupportedPartitionCharacterError: Characters inside the partition value are not supported. For example: U+0000 , U+0001, U+0002.</p> </li> <li> <p>InternalError: Any error which does not belong to other error codes.</p> </li> </ul>
**/
export class BackfillError extends SpeakeasyBase {
  @Metadata({ data: "json, name=Code" })
  code?: BackfillErrorCodeEnum;

  @Metadata({ data: "json, name=Partitions", elemType: shared.PartitionValueList })
  partitions?: PartitionValueList[];
}
