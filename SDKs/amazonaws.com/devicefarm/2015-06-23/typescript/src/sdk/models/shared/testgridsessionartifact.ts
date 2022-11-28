import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TestGridSessionArtifactTypeEnum } from "./testgridsessionartifacttypeenum";



// TestGridSessionArtifact
/** 
 * <p>Artifacts are video and other files that are produced in the process of running a browser in an automated context. </p> <note> <p>Video elements might be broken up into multiple artifacts as they grow in size during creation. </p> </note>
**/
export class TestGridSessionArtifact extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=filename" })
  filename?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: TestGridSessionArtifactTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
