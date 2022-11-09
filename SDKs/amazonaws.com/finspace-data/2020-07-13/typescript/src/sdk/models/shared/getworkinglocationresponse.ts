import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetWorkingLocationResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=s3Bucket" })
  s3Bucket?: string;

  @Metadata({ data: "json, name=s3Path" })
  s3Path?: string;

  @Metadata({ data: "json, name=s3Uri" })
  s3Uri?: string;
}
