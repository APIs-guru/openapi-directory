import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The location in Amazon S3 where build or script files are stored for access by Amazon GameLift. This location is specified in <a>CreateBuild</a>, <a>CreateScript</a>, and <a>UpdateScript</a> requests.
**/
export declare class S3Location extends SpeakeasyBase {
    bucket?: string;
    key?: string;
    objectVersion?: string;
    roleArn?: string;
}
