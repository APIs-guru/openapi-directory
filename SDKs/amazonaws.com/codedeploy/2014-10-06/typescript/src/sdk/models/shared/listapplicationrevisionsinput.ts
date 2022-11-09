import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ListStateFilterActionEnum } from "./liststatefilteractionenum";
import { ApplicationRevisionSortByEnum } from "./applicationrevisionsortbyenum";
import { SortOrderEnum } from "./sortorderenum";


// ListApplicationRevisionsInput
/** 
 *  Represents the input of a <code>ListApplicationRevisions</code> operation. 
**/
export class ListApplicationRevisionsInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=applicationName" })
  applicationName: string;

  @Metadata({ data: "json, name=deployed" })
  deployed?: ListStateFilterActionEnum;

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=s3Bucket" })
  s3Bucket?: string;

  @Metadata({ data: "json, name=s3KeyPrefix" })
  s3KeyPrefix?: string;

  @Metadata({ data: "json, name=sortBy" })
  sortBy?: ApplicationRevisionSortByEnum;

  @Metadata({ data: "json, name=sortOrder" })
  sortOrder?: SortOrderEnum;
}
