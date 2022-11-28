import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ListStateFilterActionEnum } from "./liststatefilteractionenum";
import { ApplicationRevisionSortByEnum } from "./applicationrevisionsortbyenum";
import { SortOrderEnum } from "./sortorderenum";



// ListApplicationRevisionsInput
/** 
 *  Represents the input of a <code>ListApplicationRevisions</code> operation. 
**/
export class ListApplicationRevisionsInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=applicationName" })
  applicationName: string;

  @SpeakeasyMetadata({ data: "json, name=deployed" })
  deployed?: ListStateFilterActionEnum;

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=s3Bucket" })
  s3Bucket?: string;

  @SpeakeasyMetadata({ data: "json, name=s3KeyPrefix" })
  s3KeyPrefix?: string;

  @SpeakeasyMetadata({ data: "json, name=sortBy" })
  sortBy?: ApplicationRevisionSortByEnum;

  @SpeakeasyMetadata({ data: "json, name=sortOrder" })
  sortOrder?: SortOrderEnum;
}
