import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { StoreImageTaskResult } from "./storeimagetaskresult";



export class DescribeStoreImageTasksResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  nextToken?: string;

  @SpeakeasyMetadata({ elemType: StoreImageTaskResult })
  storeImageTaskResults?: StoreImageTaskResult[];
}
