import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A complex type that contains information about the objects that you want to invalidate. For more information, see <a href="http://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Invalidation.html#invalidation-specifying-objects">Specifying the Objects to Invalidate</a> in the <i>Amazon CloudFront Developer Guide</i>.
**/
export declare class Paths extends SpeakeasyBase {
    items?: string[];
    quantity: number;
}
