import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetWorkingLocationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=s3Bucket" })
  s3Bucket?: string;

  @SpeakeasyMetadata({ data: "json, name=s3Path" })
  s3Path?: string;

  @SpeakeasyMetadata({ data: "json, name=s3Uri" })
  s3Uri?: string;
}
