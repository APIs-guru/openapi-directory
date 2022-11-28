import { SpeakeasyBase } from "../../../internal/utils";
import { TestGridSessionArtifactTypeEnum } from "./testgridsessionartifacttypeenum";
/**
 * <p>Artifacts are video and other files that are produced in the process of running a browser in an automated context. </p> <note> <p>Video elements might be broken up into multiple artifacts as they grow in size during creation. </p> </note>
**/
export declare class TestGridSessionArtifact extends SpeakeasyBase {
    filename?: string;
    type?: TestGridSessionArtifactTypeEnum;
    url?: string;
}
